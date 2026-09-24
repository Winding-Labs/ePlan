import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  buildCatalogerDocumentFilename,
  resolveCatalogerDocumentMimeType,
} from "../src/server/cataloger/document-utils";

const PDF = "application/pdf";
const DOCX =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const PDF_BYTES = new TextEncoder().encode("%PDF-1.7");
const HTML_BYTES = new TextEncoder().encode("<html>");

describe("resolveCatalogerDocumentMimeType", () => {
  it("accepts allowlisted document types, ignoring parameters and case", () => {
    assert.equal(resolveCatalogerDocumentMimeType(PDF, HTML_BYTES), PDF);
    assert.equal(
      resolveCatalogerDocumentMimeType(
        "Application/PDF; charset=binary",
        HTML_BYTES,
      ),
      PDF,
    );
    assert.equal(resolveCatalogerDocumentMimeType(DOCX, HTML_BYTES), DOCX);
    assert.equal(
      resolveCatalogerDocumentMimeType("application/msword", HTML_BYTES),
      "application/msword",
    );
  });

  it("rejects active content types", () => {
    for (const type of [
      "text/html",
      "image/svg+xml",
      "application/xhtml+xml",
      "text/javascript",
      "image/png",
    ]) {
      assert.equal(resolveCatalogerDocumentMimeType(type, PDF_BYTES), null);
    }
  });

  it("accepts unlabelled bodies only when they are PDFs", () => {
    assert.equal(resolveCatalogerDocumentMimeType(null, PDF_BYTES), PDF);
    assert.equal(
      resolveCatalogerDocumentMimeType("application/octet-stream", PDF_BYTES),
      PDF,
    );
    assert.equal(resolveCatalogerDocumentMimeType(null, HTML_BYTES), null);
    assert.equal(
      resolveCatalogerDocumentMimeType("application/octet-stream", HTML_BYTES),
      null,
    );
  });

  it("does not treat prototype keys as allowlisted", () => {
    assert.equal(
      resolveCatalogerDocumentMimeType("constructor", PDF_BYTES),
      null,
    );
    assert.equal(
      resolveCatalogerDocumentMimeType("__proto__", PDF_BYTES),
      null,
    );
  });
});

describe("buildCatalogerDocumentFilename", () => {
  it("keeps a plain filename from the URL", () => {
    assert.equal(
      buildCatalogerDocumentFilename(
        "https://gov.example/docs/Plan%20Final.pdf",
        "Title",
        PDF,
      ),
      "Plan Final.pdf",
    );
  });

  it("cannot add key segments via encoded separators", () => {
    const name = buildCatalogerDocumentFilename(
      "https://gov.example/docs/..%2F..%2Fother%5Cx%2Fevil.pdf",
      "Title",
      PDF,
    );
    assert.ok(!name.includes("/"));
    assert.ok(!name.includes("\\"));
    assert.ok(!name.startsWith("."));
    assert.ok(name.endsWith(".pdf"));
  });

  it("strips control characters", () => {
    const name = buildCatalogerDocumentFilename(
      "https://gov.example/a%0D%0Ab%00c.pdf",
      "Title",
      PDF,
    );
    assert.equal(name, "a__b_c.pdf");
  });

  it("forces the extension to match the stored type", () => {
    assert.equal(
      buildCatalogerDocumentFilename("https://gov.example/x.html", "T", PDF),
      "x.html.pdf",
    );
    assert.equal(
      buildCatalogerDocumentFilename("https://gov.example/report", "T", DOCX),
      "report.docx",
    );
    assert.equal(
      buildCatalogerDocumentFilename(
        "https://gov.example/REPORT.PDF",
        "T",
        PDF,
      ),
      "REPORT.PDF",
    );
  });

  it("falls back to the title, then a default name", () => {
    assert.equal(
      buildCatalogerDocumentFilename("https://gov.example/", "Plan/2024", PDF),
      "Plan_2024.pdf",
    );
    assert.equal(
      buildCatalogerDocumentFilename("https://gov.example/", "", PDF),
      "document.pdf",
    );
  });

  it("survives malformed percent-encoding", () => {
    assert.equal(
      buildCatalogerDocumentFilename(
        "https://gov.example/bad%E0%A4%A.pdf",
        "T",
        PDF,
      ),
      "bad%E0%A4%A.pdf",
    );
  });

  it("bounds the filename length", () => {
    const name = buildCatalogerDocumentFilename(
      `https://gov.example/${"a".repeat(500)}`,
      "T",
      PDF,
    );
    assert.ok(name.length <= 200);
    assert.ok(name.endsWith(".pdf"));
  });
});

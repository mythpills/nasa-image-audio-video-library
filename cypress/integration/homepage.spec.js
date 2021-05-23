describe("renders the homepage", () => {
  it("renders correctly on load", () => {
    cy.visit("/");
    cy.get('[data-cy="header-sticky-container"]').should("be.visible");
    cy.get('[name="keywords"]').should("be.visible");
    cy.get('[name="mediaType"]').should("be.visible");
    cy.get('[name="yearStart"]').should("be.visible");
    cy.get("button[type=submit]").should("be.visible");
  });
});

describe("check form validation", () => {
  it("throws error if mandatory fields not selected", () => {
    cy.visit("/");
    cy.get("button[type=submit]").should("be.enabled");
    cy.get("button[type=submit]").click();
    cy.get("span[role=alert]").should("have.length", 2);
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text("Please enter keywords to search.");
      expect(span[1]).to.have.text("Please select a media type.");
    });
  });

  it("throws error if keyword field value not entered", () => {
    cy.visit("/");
    cy.get('[name="keywords"]').click();
    cy.get('[name="mediaType"]').select("image");
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text("Please enter keywords to search.");
    });
  });

  it("throws error if keyword field value less than 2", () => {
    cy.visit("/");
    cy.get('[name="keywords"]').type("s");
    cy.get('[name="mediaType"]').select("");
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text(
        "Keywords must be between 2 and 50 characters."
      );
    });
  });

  it("throws error if keyword field value more than 50", () => {
    cy.visit("/");
    cy.get('[name="keywords"]').type(
      "ssssssssssssssssssssssssssssssssssssssssssssssssssss"
    );
    cy.get('[name="mediaType"]').select("");
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text(
        "Keywords must be between 2 and 50 characters."
      );
    });
  });

  it("throws error if mediaType field value not entered", () => {
    cy.visit("/");
    cy.get('[name="mediaType"]').select("");
    cy.get('[name="keywords"]').click();
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text("Please select a media type.");
    });
  });

  it("throws error if year start field is invalid", () => {
    cy.visit("/");
    cy.get('[name="yearStart"]').type("123");
    cy.get('[name="mediaType"]').select("");
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text("Please enter a valid year.");
    });
  });

  it("throws error if year is in future", () => {
    cy.visit("/");
    cy.get('[name="yearStart"]').type("3000");
    cy.get('[name="mediaType"]').select("");
    cy.get("span[role=alert]").then((span) => {
      expect(span[0]).to.have.text("Year must not be in the future.");
    });
  });

  it("no error when mandatory fields submitted", () => {
    cy.visit("/");
    cy.get('[name="keywords"]').type("moon");
    cy.get('[name="mediaType"]').select("image");
    cy.get("button[type=submit]").click();
    cy.get("span[role=alert]").should("not.exist");
  });
});

describe("submit button status", () => {
  it("should update correctly", () => {
    cy.visit("/");
    cy.get('[name="keywords"]').type("moon");
    cy.get('[name="mediaType"]').select("image");
    cy.get("button[type=submit]").should("be.enabled");
    cy.get("button[type=submit]")
      .click()
      .then(async (btn) => {
        await cy.get(btn).should("be.disabled");
        await cy.get("section div img").should("have.length", 10);
        await cy.get(btn).should("be.enabled");
      });
  });
});

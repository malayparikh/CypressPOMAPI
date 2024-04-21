describe("POST Request Test", () => {
  it("Should create a new user and verify response", () => {
    // Send POST request
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      // Verify response status code
      expect(response.status).to.eq(201)

      // Verify response body
      expect(response.body).to.have.property("name", "morpheus")
      expect(response.body).to.have.property("job", "leader")
      expect(response.body).to.have.property("id").to.be.a("string")
      expect(response.body).to.have.property("createdAt").to.be.a("string")
    })
  })
})

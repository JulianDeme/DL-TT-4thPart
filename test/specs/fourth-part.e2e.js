describe('"Get in touch" form e2e', function () {
  before(browser => browser.navigateTo('https://inhouse.decemberlabs.com'));

  it('Validate Home Page', function (browser) {
    browser
      .windowMaximize()
      .waitForElementVisible('body')
      .assert.titleContains('December Labs: UX/UI Design and Mobile App & Web Development')
      // .assert.visible('#menu-item-844')
      // .assert.textContains('#menu-item-844','Home')
      .assert.visible('#menu-item-839')
      .assert.textContains('#menu-item-839', 'About')
      .assert.visible('#menu-item-842')
      .assert.textContains('#menu-item-842', 'Services')
      .assert.visible('#menu-item-841')
      .assert.textContains('#menu-item-841', 'Our Work')
      .assert.visible('#menu-item-840')
      .assert.textContains('#menu-item-840', 'Blog')
      .assert.visible('#menu-item-843')
      .assert.textContains('#menu-item-843', 'FAQ')
      .assert.visible('#menu-item-838')
      .assert.textContains('#menu-item-838', 'Careers')
      // .assert.visible('#menu-item-845')
      // .assert.textContains('#menu-item-845','Press')
      .assert.visible('#menu-item-846')
      .assert.textContains('#menu-item-846', 'Get in touch')
      .click('#menu-item-846')
  });
  it('Validate modal', function (browser) {
    browser
      .waitForElementVisible('.two-columns')
      .assert.textContains('.two-columns h3', 'Get In Touch')
      .assert.visible('#wpforms-872-field_0-container')
      .assert.visible('#wpforms-872-field_1-container')
      .assert.visible('#wpforms-872-field_2-container')
      .assert.visible('#wpforms-872-field_3-container')
      // .assert.visible('#wpforms-872-field_4-container')
      .assert.visible('#wpforms-872-field_5-container')
      .assert.visible('#wpforms-872-field_6-container')
      .assert.visible('#wpforms-872-field_7-container')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
  });
  it('Validate Name field', function (browser) {
    browser
      .assert.visible('#wpforms-872-field_0-container label:nth-child(1)')
      .assert.textContains('#wpforms-872-field_0-container label:nth-child(1)', 'Name ')
      .assert.visible('#wpforms-872-field_0-container span')
      .assert.textContains('#wpforms-872-field_0-container span', '*')
      .assert.visible('#wpforms-872-field_0-container input')
  });
  it('Validate E-mail field', function (browser) {
    browser
      .assert.visible('#wpforms-872-field_1-container label:nth-child(1)')
      .assert.textContains('#wpforms-872-field_1-container label:nth-child(1)', 'E-mail ')
      .assert.visible('#wpforms-872-field_1-container span')
      .assert.textContains('#wpforms-872-field_1-container span', '*')
      .assert.visible('#wpforms-872-field_1-container input')
  });
  it('Validate Company field', function (browser) {
    browser
      .assert.visible('#wpforms-872-field_6-container label:nth-child(1)')
      .assert.textContains('#wpforms-872-field_6-container label:nth-child(1)', 'Company ')
      .assert.visible('#wpforms-872-field_6-container span')
      .assert.textContains('#wpforms-872-field_6-container span', '*')
      .assert.visible('#wpforms-872-field_6-container input')
  });
  it('Validate Message field', function (browser) {
    browser
      .assert.visible('#wpforms-872-field_2-container label:nth-child(1)')
      .assert.textContains('#wpforms-872-field_2-container label:nth-child(1)', 'Message ')
      .assert.visible('#wpforms-872-field_2-container span')
      .assert.textContains('#wpforms-872-field_2-container span', '*')
      .assert.visible('#wpforms-872-field_2-container textarea')
  });
  it('Check modal error validations', function (browser) {
    browser
      .click('button[type=submit]')
      .expect.element('#wpforms-872-field_0-container input').to.have.css('aria-invalid').which.equals('true')
      .assert.not.visible('#wpforms-872-field_0-container label:nth-child(3)')
      .expect.element('#wpforms-872-field_1-container input').to.have.css('aria-invalid').which.equals('true')
      .assert.not.visible('#wpforms-872-field_1-container label:nth-child(3)')
      .expect.element('#wpforms-872-field_6-container input').to.have.css('aria-invalid').which.equals('true')
      .assert.not.visible('#wpforms-872-field_6-container label:nth-child(3)')
      .expect.element('#wpforms-872-field_2-container input').to.have.css('aria-invalid').which.equals('true')
      .assert.not.visible('#wpforms-872-field_2-container label:nth-child(3)')
  });
  it('Check modal error validations', function (browser) {
    browser
      .setValue('#wpforms-872-field_0-container input', 'a b')
      .assert.attributeEquals("#wpforms-872-field_0-container input", "aria-invalid", "false")
      .setValue('#wpforms-872-field_1-container input', 'a@b.cd')
      .assert.attributeEquals("#wpforms-872-field_1-container input", "aria-invalid", "false")
      .setValue('#wpforms-872-field_6-container input', 'a ltd')
      .assert.attributeEquals("#wpforms-872-field_6-container input", "aria-invalid", "false")
      .setValue('#wpforms-872-field_2-container textarea', 'abcdℇfghijklmnñoπqrstubwxyz 1234567890!"#$%&/()=?+-')
      .assert.attributeEquals("#wpforms-872-field_2-container textarea", "aria-invalid", "false")
  });
  after(browser => browser.end());
});

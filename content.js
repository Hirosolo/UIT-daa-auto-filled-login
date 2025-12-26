(() => {
  if (window.__UIT_AUTO_LOGIN_RAN__) return;
  window.__UIT_AUTO_LOGIN_RAN__ = true;

  if (!document.body.classList.contains("not-logged-in")) return;
  if (document.body.classList.contains("logged-in")) return;

  chrome.storage.sync.get(
    ["enabled", "mode", "studentId", "password"],
    (cfg) => {
      if (!cfg.enabled) return;

      const user = document.getElementById("edit-name");
      const pass = document.getElementById("edit-pass");

      if (!user || !pass) return;

      if (cfg.mode === "stored") {
        if (!cfg.studentId || !cfg.password) return;

        user.value = cfg.studentId;
        pass.value = cfg.password;

        user.dispatchEvent(new Event("input", { bubbles: true }));
        pass.dispatchEvent(new Event("input", { bubbles: true }));
      }

      // captcha
      const label = document.querySelector(
        'label[for="edit-english-captcha-answer"]'
      );
      if (!label) return;

      const text = label.childNodes[0]?.textContent?.trim();
      const match = text?.match(/\(([^()]*)\)\s*$/);
      if (!match) return;

      const captchaInput = document.getElementById(
        "edit-english-captcha-answer"
      );
      if (!captchaInput) return;

      captchaInput.value = match[1];
      captchaInput.dispatchEvent(new Event("input", { bubbles: true }));

      document.getElementById("edit-submit--2")?.click();
    }
  );
})();

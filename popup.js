const enabled = document.getElementById("enabled");
const mode = document.getElementById("mode");
const studentId = document.getElementById("studentId");
const password = document.getElementById("password");
const saveBtn = document.getElementById("save");
const status = document.getElementById("status");
const storedFields = document.getElementById("storedFields");

// Load settings
chrome.storage.sync.get(
  ["enabled", "mode", "studentId", "password"],
  (data) => {
    enabled.checked = data.enabled ?? true;
    mode.value = data.mode ?? "autofill";
    studentId.value = data.studentId ?? "";
    password.value = data.password ?? "";
    updateUI();
  }
);

function updateUI() {
  storedFields.classList.toggle("hidden", mode.value !== "stored");
}

enabled.onchange = () => {
  chrome.storage.sync.set({ enabled: enabled.checked });
};

mode.onchange = () => {
  chrome.storage.sync.set({ mode: mode.value });
  updateUI();
};

saveBtn.onclick = () => {
  if (!studentId.value.trim() || !password.value.trim()) {
    status.textContent = "Please fill both fields";
    status.style.color = "#dc2626";
    return;
  }

  chrome.storage.sync.set(
    {
      studentId: studentId.value.trim(),
      password: password.value.trim()
    },
    () => {
      status.textContent = "Saved successfully";
      status.style.color = "#16a34a";
      setTimeout(() => (status.textContent = ""), 1500);
    }
  );
};

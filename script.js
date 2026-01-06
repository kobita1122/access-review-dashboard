const data = [
  { user: "Admin", role: "Admin", reviewed: "2024-09-01" },
  { user: "Manager", role: "Manager", reviewed: "2024-07-15" },
  { user: "User", role: "User", reviewed: "2024-06-01" }
];

const tbody = document.getElementById("reviews");

function render() {
  tbody.innerHTML = "";
  data.forEach(u => {
    tbody.innerHTML += `
      <tr>
        <td>${u.user}</td>
        <td>${u.role}</td>
        <td>${u.reviewed}</td>
        <td><button onclick="review('${u.user}')">Mark Reviewed</button></td>
      </tr>
    `;
  });
}

function review(user) {
  alert("Access reviewed for " + user);
}

render();

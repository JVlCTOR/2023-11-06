const input = document.getElementById("name");
const btn = document.getElementById("btn-send");
const conteudo = document.getElementById("content");

const convidados = [
  {
    name: "Joao",
  },
  {
    name: "Victor",
  },
  {
    name: "Neto",
  },
];

function editarConvidado(id) {
  const convidado = convidados.find((convidado, index) => index === id);
  input.value = convidado.name;
}

function deletarConvidado(id) {
  convidados.splice(id, 1);
  conteudo.innerHTML = "";
  convidados.map((convidado, index) => {
    conteudo.innerHTML += `
            <li>
            ${convidado.name}
            <div class="btns">
            <button onclick=editarConvidado(${index})>Editar</button>
            <button onclick=deletarConvidado(${index})>Deletar</button>
            </div>
            </li>
        `;
  });
}

window.addEventListener("load", () => {
  convidados.map((convidado, index) => {
    return (conteudo.innerHTML += `
            <li>
            ${convidado.name}
            <div class="btns">
            <button onclick=editarConvidado(${index})>Editar</button>
            <button onclick=deletarConvidado(${index})>Deletar</button>
            </div>
            </li>
        `);
  });
});
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // conteudo.innerHTML += `<li>${convidados.map((convidado , index) => convidado.name)}</li> `;
 conteudo.innerHTML += `<li>${input.value}</li>`
});

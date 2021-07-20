//Where information will appear from profile
const profileInfo = document.querySelector(".overview");
//github username
const username = "Jasmine582";

//fetch api json
const userInfo = async function () {
    const gitInfo = await fetch(`https://api.github.com/users/${username}` );
    const data = await gitInfo.json();
    displayInfo(data);
};
userInfo();

const displayInfo = function (data) {
 const div = document.createElement("div");
 div.classList.add("user-info");
 div.innerHTML = `
 <figure>
    <img alt="user avatar"  src=${data.avatar_url}  />
</figure>
<div>
    <p><strong>Name:</strong>  ${data.name}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
</div>
 `;

 profileInfo.append(div);

};

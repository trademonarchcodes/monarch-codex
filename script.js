const scriptURL =
"https://script.google.com/macros/s/AKfycbyhIQgRme0xZcRARuv6EnwzlPF_m383kni84axr5kL_JrxPkAbCkiApqYqhXtVBHu1q/exec";

const form =
document.getElementById("joinForm");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        country:
        document.getElementById("country").value,

        interest:
        document.getElementById("interest").value,

        story:
        document.getElementById("story").value
    };

    try{

        await fetch(scriptURL,{

            method:"POST",

            body:JSON.stringify(data)

        });

        alert(
            "Application Submitted Successfully!"
        );

        form.reset();

    }

    catch(error){

        alert(
            "Submission Failed. Please Try Again."
        );

        console.log(error);
    }

});

async function loadMembers(){

    try{

        const response =
        await fetch(
        "https://script.google.com/macros/s/AKfycbyhIQgRme0xZcRARuv6EnwzlPF_m383kni84axr5kL_JrxPkAbCkiApqYqhXtVBHu1q/exec"
        );

        const members =
        await response.json();

        const container =
        document.getElementById(
        "membersContainer"
        );

        if(!container) return;

        container.innerHTML = "";

        members.forEach(member => {

            container.innerHTML += `

            <div class="card">

                <h3>${member.name}</h3>

                <p>${member.memberId}</p>

                <p>${member.country}</p>

                <p>${member.interest}</p>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadMembers();
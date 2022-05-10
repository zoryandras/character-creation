/*
    const form = () => {
		return `
        <form id="form">
			<label>Write thy name: </label>
			<input id="input1" placeholder="" name="name"/>	
			<label>Choose thy gender: </label>
			<select class="gender" id="input2">
			<option value="Female">Female</option>
			<option value="Male">Male</option>
			<option value="Just a gigolo">Just a gigolo</option>
			</select>
			<label>Choose thy race: </label>
			<select class="race" id="input3">
			<option value="Human">Human</option>
			<option value="Elf">Elf</option>
				<option value="Half-elf">Half-elf</option>
				<option value="Gnome">Gnome</option>
				<option value="Dwarf">Dwarf</option>
				<option value="Half-orc">Half-orc</option>
				<option value="Aasimar">Aasimar</option>
				</select>
				<label>Choose thy class: </label>
				<select class="classes" id="input4">
				<option value="Barbarian">Barbarian</option>
				<option value="Bard">Bard</option>
				<option value="Cleric">Cleric</option>
				<option value="Druid">Druid</option>
				<option value="Fighter">Fighter</option>
				<option value="Mage">Mage</option>
				<option value="Monk">Monk</option>
				<option value="Paladin">Paladin</option>
				<option value="Ranger">Ranger</option>
				<option value="Sorcerer">Sorcerer</option>
				<option value="Thief">Thief</option>
				<option value="Frontender">Frontender</option>
				</select>
				</form>
				<button id="btn">Create </button>
				<section class="sheet">
				<p id="value"></p>
				<p id="gender"></p>
				</section>
				`
			} 
*/			
			const formHTML = () => {
				return `
				<form id="form">
				<label>Enter thy name:</label>
				<input name="input1" id="input1" type="text" />
				
					<label>Gender:</label>
					<select name="gender" id="gender" class="gender">
						<option value=" "></option>
						<option value="Female">Female</option>
						<option value="Male">Male</option>
						<option value="Just a gigolo">Just a gigolo</option>
					</select>
					<label>Race:</label>
					<select name="race" id="race" class="race">
						<option value=" "></option>
						<option value="Human">Human</option>
						<option value="Elf">Elf</option>
						<option value="Half-elf">Half-elf</option>
						<option value="Gnome">Gnome</option>
						<option value="Dwarf">Dwarf</option>
						<option value="Half-orc">Half-orc</option>
						<option value="Homeless">Homeless</option>
					</select>
		
		
					<label>Class:</label>
					<select name="class" id="class" class="class">
						<option value=" "></option>
						<option value="Barbarian">Barbarian</option>
						<option value="Bard">Bard</option>
						<option value="Cleric">Cleric</option>
						<option value="Druid">Druid</option>
						<option value="Mage">Mage</option>
						<option value="Monk">Monk</option>
						<option value="Frontender">Frontender</option>
					</select>
		
		
				</form>
				<section id="sheet">
					<p id="pname"></p>
					<img id="pgender" src="">
					<img id="prace" src="">
					<img id="pclass"></p>
				</section>
				`
			}
		
function loadEvent() {
	console.log("load");
	const rootElement = document.getElementById("root")
			
	rootElement.insertAdjacentHTML("beforeend", formHTML())
	
			
				//belementjük a formot egy változóba
	const form = rootElement.querySelector("form")
			
				//input esemény
	const inputList = document.querySelectorAll("input")
			
	Array.from(inputList).map(function(input){
		input.addEventListener("input", function(e) {
			console.log(e.target.value);
			})
		})
			
	const input = document.querySelector('input');
	const log = document.getElementById('pname');

				//select esemény 
	/* form.querySelector(".race").addEventListener("input", function(e){
		console.log(e.target.value);
		prace.insertAdjacentHTML("beforeend", e.target.value + "  ")
		}) */

		
		/* form.querySelector(".gender").addEventListener("change", function(e){
			console.log(e.target.value);
			pgender.insertAdjacentHTML("beforeend", e.target.value + "  ")
		}) */
		
		
		const selectElement1 = document.getElementById('gender');
		selectElement1.addEventListener('change', function () {
			if (selectElement1.value === "Male") {
				document.getElementById("pgender").setAttribute("src","images/pimp2.png")
			} else if (selectElement1.value === "Female") {
				document.getElementById("pgender").setAttribute("src","images/e-girl.png")
			} else if (selectElement1.value === "Just a gigolo") {
				document.getElementById("pgender").setAttribute("src","images/pimp.png")
			}

			//const result = document.getElementById('pgender')
			//result.textContent = `${selectElement1.value}`;
		});
		

		const selectElement2 = document.getElementById('race');
		selectElement2.addEventListener('change', function () {
			if (selectElement2.value === "Human") {
				document.getElementById("prace").setAttribute("src","images/man.png")
			} else if (selectElement2.value === "Elf") {
				document.getElementById("prace").setAttribute("src","images/elf.png")
			} else if (selectElement2.value === "Half-elf") {
				document.getElementById("prace").setAttribute("src","images/elf1.png")
			} else if (selectElement2.value === "Gnome") {
			document.getElementById("prace").setAttribute("src","images/gnome.png")
			} else if (selectElement2.value === "Dwarf") {
			document.getElementById("prace").setAttribute("src","images/gnome1.png")
			} else if (selectElement2.value === "Half-orc") {
			document.getElementById("prace").setAttribute("src","images/orc.png")
			} else if (selectElement2.value === "Homeless") {
			document.getElementById("prace").setAttribute("src","images/homeless.png")
		}
	});
		
		
	/* form.querySelector(".class").addEventListener("input", function(e){
		console.log(e.target.value);
		pclass.insertAdjacentHTML("beforeend", e.target.value + "  ")
		}) */
			
		const selectElement3 = document.getElementById('class');
		selectElement3.addEventListener('change', function() {
			if (selectElement3.value === "Barbarian") {
				document.getElementById("pclass").setAttribute("src","images/viking1.png")
			} else if (selectElement3.value === "Bard") {
				document.getElementById("pclass").setAttribute("src","images/bard1.png")
			} else if (selectElement3.value === "Cleric") {
				document.getElementById("pclass").setAttribute("src","images/cleric.png")
			} else if (selectElement3.value === "Druid") {
			document.getElementById("pclass").setAttribute("src","images/druid.png")
			} else if (selectElement3.value === "Mage") {
			document.getElementById("pclass").setAttribute("src","images/magician.png")
			} else if (selectElement3.value === "Monk") {
			document.getElementById("pclass").setAttribute("src","images/monk.png")
			} else if (selectElement3.value === "Frontender") {
			document.getElementById("pclass").setAttribute("src","images/programmer.png")
		}
	});	
	
	
	//sumbit esemény
	form.addEventListener("submit", function(e){           //form a sor elején: már elmentettük egy változóba
		e.preventDefault()
		console.log(e.target);
		})
				
	form.addEventListener("submit", function(e){
		e.preventDefault()
		console.log(e.target);
		})

		
	input.addEventListener('input', updateValue);

	function updateValue(e) {
		log.textContent = e.target.value;
	}
	
}

window.addEventListener("load", loadEvent);
function projectsCreation(input){
    let name = input[0];
    let projects = Number(input[1]);
    let needHours = 3 * projects;
    console.log(`The architect ${name} will need ${needHours} hours to complete ${projects} project/s.`);
}

projectsCreation(["George ", "4 "])
projectsCreation(["Sanya ", "9 "])
const employees = [
  { id: 1, name: "Ahmed", department: "Sales", salary: 8500, experience: 5, performance: 4.7, isActive: true },
  { id: 2, name: "Sara", department: "Marketing", salary: 9200, experience: 3, performance: 4.1, isActive: false },
  { id: 3, name: "Omar", department: "IT", salary: 12500, experience: 6, performance: 4.8, isActive: true },
  { id: 4, name: "Laila", department: "Sales", salary: 7800, experience: 2, performance: 3.9, isActive: true },
  { id: 5, name: "Mostafa", department: "IT", salary: 14000, experience: 8, performance: 4.9, isActive: true },
  { id: 6, name: "Heba", department: "HR", salary: 6900, experience: 4, performance: 4.3, isActive: false },
  { id: 7, name: "Khaled", department: "Marketing", salary: 10200, experience: 7, performance: 4.6, isActive: true },
  { id: 8, name: "Mona", department: "HR", salary: 8000, experience: 5, performance: 4.5, isActive: true },
];


const activeEmployee = employees.filter((employee)=>employee.isActive)
console.log(activeEmployee);

const performance = activeEmployee.filter((user) =>user.performance >= 4.5)
console.log(performance)

//المتوسط الموظفين اللى اداءهم اكبر من 4.5 
const employeeNumber = performance.reduce((acc,current) =>acc +current.salary,0)
const avg = employeeNumber/ performance.length
console.log(`المتوسط الحسابى للمموظفين اداوهم اكبر من 4.5: ${avg}`)







 const names = performance.map((employe)=>{
    const incresing = employe.salary * .10 
    const newSalary = employe.salary + incresing
    console.log(` name of employe is =>${employe.name}   🟩department =>${employe.department}   💰newSalary =>${newSalary} EGP `)


 })
 
 const maxPerformance = Math.max(...employees.map(employe => employe.performance));

 
 const highPerformance = employees.find(employe => employe.performance === maxPerformance);

console.log(highPerformance)
    
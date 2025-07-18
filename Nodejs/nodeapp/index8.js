import bcrypt from 'bcrypt'
// const pass = "pass1234"
// const hashedped = await bcrypt.hash(pass,10);
// console.log(hashedped)
const check = await bcrypt.compare("pass1234","$2b$10$nxbAdJdwy0.s71zBmW7PheQ/eKYzI50WCNKUwdriowKJYbBR1L.Qq")
console.log(check)
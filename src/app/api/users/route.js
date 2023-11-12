import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users?apikey=${process.env.TOKEN}`)
    .then(res => res.ok ? res.json() : Promise.reject('error'))
    .catch(err => []);
  return NextResponse.json(data);
}

export async function POST(request) {
  // request body
  const {nombre, apellido} = await request.json();
  console.log(`${nombre} ${apellido}`);

  return NextResponse.json({
    message: "creando datos!"
  });
}

export function PUT() {
  return NextResponse.json({
    message: "actualizando datos!"
  });
}

export function PATCH() {
  return NextResponse.json({
    message: "actualizando parcialmente los datos"
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "eliminando datos!"
  });
}
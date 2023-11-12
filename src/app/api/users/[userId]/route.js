import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  // query params
  console.log(params);
  // search params
  const {searchParams} = new URL(request.url);
  const nombre = searchParams.get("nombre");
  console.log(nombre);

  // call api
  let data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .catch(err => {
      return {};
    });
  
  // response
  return NextResponse.json(data);
}
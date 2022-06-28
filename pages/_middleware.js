import {  NextResponse } from 'next/server'


export function middleware(request) { 
  
  if ( request.geo.city === undefined ) {
    return NextResponse.rewrite(new URL('/page', request.url))
   
  } else if (request.geo.city === 'New York') {
    return NextResponse.redirect(new URL('/page', request.url))
    
  } else if (request.geo.city === 'London') {
    return NextResponse.rewrite(new URL('/page', request.url))
  }

  return NextResponse.next()

}
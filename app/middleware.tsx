'use client';
import { getAuth } from 'firebase/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import firebase_app from '../utils/firebase/config';
 
const auth = getAuth(firebase_app);

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin') && auth.currentUser !== null) {
    return NextResponse.rewrite(new URL('/admin', request.url));
  }
 
else return NextResponse.rewrite(new URL('/', request.url));
}
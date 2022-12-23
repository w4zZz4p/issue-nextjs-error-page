import { NextResponse } from 'next/server';

export function middleware(request) {
    // some rewrite logic for specific requests

    // all other requests pass-trough
    return NextResponse.next();
}

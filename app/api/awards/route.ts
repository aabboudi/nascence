import { NextResponse } from 'next/server';
import { getAllAwards } from '@/db/queries';

// GET /api/awards - Fetch all awards
export async function GET() {
  try {
    const allAwards = await getAllAwards();
    
    return NextResponse.json({
      success: true,
      data: allAwards,
    });
  } catch (error) {
    console.error('Error fetching awards:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch awards' },
      { status: 500 }
    );
  }
}

// // POST /api/awards - Create a new award
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email } = body;

//     if (!name || !email) {
//       return NextResponse.json(
//         { success: false, error: 'Name and email are required' },
//         { status: 400 }
//       );
//     }

//     const newUser = await db.insert(awards).values({ name, email }).returning();
    
//     return NextResponse.json({
//       success: true,
//       data: newUser[0],
//     }, { status: 201 });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     return NextResponse.json(
//       { success: false, error: 'Failed to create user' },
//       { status: 500 }
//     );
//   }
// }

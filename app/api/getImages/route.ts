import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '../../lib/cloudinary'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder is required' }, { status: 400 });
  }

  try {
    const resources = await cloudinary.search
      .expression(`folder:${folder}`) // Busca imagens na pasta especificada
      .max_results(20) // Limita o número de imagens retornadas
      .execute();

    const images = resources.resources.map((resource: any) => ({
      id: resource.asset_id,
      src: resource.secure_url,
      alt: resource.public_id,
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    return NextResponse.json({ error: 'Erro ao buscar imagens' }, { status: 500 });
  }
}

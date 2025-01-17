'use client';

import { assets } from '@/assets/assets';
import clsx from 'clsx';
import Image from 'next/image';

export default async function GetKboGameList() {

  // API 요청 함수
  const getGameList = async () => {
    const res = await fetch(
      'https://www.koreabaseball.com/ws/Main.asmx/GetKboGameList?leid=1&srid=0&date=20240328',
      {
        cache: 'no-store', // 캐싱 비활성화
      }
    );
    return res.json();
  };

  // 데이터 가져오기
  const data = await getGameList();

  return (
    <>
      <h1>Game List</h1>
      <div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {data.game.map((item, index) => (
            <li key={index} className='flex flex-col border border-zinc-200 rounded-lg p-4'>
              <div className='flex items-center justify-between'>
                <div className='w-full flex items-center text-sm gap-2 font-pretendard font-medium text-zinc-600 pb-1 border-b border-zinc-200'>
                  <p>{item.S_NM}</p>
                  <p>{item.G_TM}</p>
                </div>                
              </div>

              <div className='flex flex-col items-right gap-2 py-5'>
                <div className='flex items-center gap-2'>
                  <Image src={assets.logo[`logo_${item.HOME_ID}`]} alt='' className='w-8' />
                  <p className={clsx(`text-${item.HOME_ID}-main font-semibold`)}>{item.HOME_NM}</p>
                </div>
                
                <div className='flex items-center gap-2'>
                  <Image src={assets.logo[`logo_${item.AWAY_ID}`]} alt='' className='w-8'  />
                  <p className={clsx(`text-${item.AWAY_ID}-main font-semibold`)}>{item.AWAY_NM}</p>
                </div>
              </div>
              
              
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

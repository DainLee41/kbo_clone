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
            <li key={index} className='flex flex-col border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2 font-pretendard font-semibold'>
                  <p>{item.S_NM}</p>
                  <p>{item.G_TM}</p>
                </div>                
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex flex-col items-center gap-2'>
                  <Image src={assets.emblem[`${item.HOME_ID}`]} alt='' />
                  <p className={clsx(`text-${item.HOME_ID}-main`)}>{item.HOME_NM}</p>
                </div>
                
                <div className='flex flex-col items-center'>
                  <Image src={assets.emblem[`${item.AWAY_ID}`]} alt=''/>
                  <p className={clsx(`text-${item.AWAY_ID}-main`)}>{item.AWAY_NM}</p>
                </div>
              </div>
              
              
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

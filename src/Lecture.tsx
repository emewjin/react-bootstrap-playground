import React from 'react';
import { Form, Image } from 'react-bootstrap';

export function Lecture({ isFirst = false }) {
  return (
    <>
      {isFirst && <div className="h-[1px] bg-slate-300 w-full mt-2" />}
      <div className="flex my-2">
        <Form.Check type="checkbox" id="default-checkbox" />
        <Image
          className="mx-[16px]"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          rounded
          width={120}
          height={78}
        />
        <div>
          <p>강의 이름 강의 이름 강의 이름</p>
          <div className="flex items-center mt-1 text-sm">
            <p className="text-gray-400">지식공유자</p>
            <div className="h-[10px] w-px mx-2 bg-gray-400" />
            <p className="font-semibold text-primary-500">수강기한</p>
          </div>
        </div>
        <div className="self-start ml-20">X</div>
        <div className="w-px h-auto mx-6 my-0 bg-gray-300" />
        <p className="self-start ml-auto font-bold">99,999,999원</p>
      </div>
      <div className="h-[1px] bg-slate-300  w-full mt-2" />
    </>
  );
}

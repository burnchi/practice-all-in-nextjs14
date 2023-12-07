"use client"
import React from 'react'
import useSWR from "swr";
import { items } from '../data/data';
import { notFound } from 'next/navigation';

const getData = (dataItems: any) => {
    const data = items[dataItems]
    if (data) {
        return data
    }
    
    return notFound()
}


const Fetchpage = () => {
    // 获取本地数据
    const datas = getData("applications")
    console.log(datas);
    
    const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

    // 请求外网API
    const { data, mutate, error, isLoading } = useSWR(
        `https://jsonplaceholder.typicode.com/users`,
        fetcher
    );

    console.log(data);
    console.log(error);
    console.log(isLoading);
    
    return (
        <div>Fetchpage</div>
    )
}

export default Fetchpage
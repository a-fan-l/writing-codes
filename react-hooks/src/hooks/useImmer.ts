

import { produce, Draft, freeze } from 'immer'
import { useCallback, useState } from 'react'

export type ImmerHooks<S> = [S]
export type DraftFunction<S> = (draft: Draft<S>) => void

// 函数签名
function useImmer<T = unknown>(initialValue: T) {
    // 1. 原来初始化的对象不能修改，freeze 冻结
    const [val, updateVal] = useState(() => freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true))
    
    // 2. 返回值、函数
    return [
        val,
        useCallback((updater: T | DraftFunction<T>) => {
            if(typeof updater === 'function') {
                updateVal(produce(updater as DraftFunction<T>))
            } else {
                updateVal(freeze(updater))
            }
        }, [])
    ]
}

export default useImmer;
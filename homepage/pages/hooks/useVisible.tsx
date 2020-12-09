//MIT License
//
// Copyright (c) 2019 kmkzt
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import {MutableRefObject, useCallback, useEffect, useRef, useState} from "react";

const defaultIntersectionObserverInit: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: Array.from({ length: 100 }, (v: undefined, i: number) => i * 0.01)
}
export const useVisible = <T extends Element, V = number>(
    cb?: (vi: number) => V,
    option: Partial<IntersectionObserverInit> = {}
): [MutableRefObject<T | null>, V] => {
    const targetRef = useRef<T | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const [visible, setVisible] = useState<number>(0)
    // TODO: visible types refactor
    const status: V = typeof cb === 'function' ? cb(visible) : (visible as any)
    const observerCallback: IntersectionObserverCallback = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                setVisible(entry.intersectionRatio)
            })
        },
        []
    )

    useEffect(() => {
        if (observerRef.current) return
        if (!targetRef.current) return
        observerRef.current = new IntersectionObserver(observerCallback, {
            ...defaultIntersectionObserverInit,
            ...option
        })
        observerRef.current.observe(targetRef.current)
    })

    return [targetRef, status]
}
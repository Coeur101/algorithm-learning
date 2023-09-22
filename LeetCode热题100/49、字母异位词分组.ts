type ls = string[]
function groupAnagrams(strs: ls): string[][] {
  if (strs.length === 0) {
    return [['']]
  }
  if (strs.length === 1) {
    return [[strs[0]]]
  }
  const map = new Map<string, ls>()
  // 将字符串排序
  strs.forEach((item) => {
    let s = item.split('').sort().join('')
    if (!map.has(s)) {
      map.set(s, [])
    }
    map.get(s)?.push(item)
  })

  return [...map.values()]
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

const a = '  kjsgfgf 089580 %$^#%&%^7 fdsjflsjfjds'

// concat()
console.log(a.concat('aaaaaaa'))

// indexOf() lastIndexOf()
console.log(a.indexOf('k'))
console.log(a.lastIndexOf('s'))

// includes()
console.log(a.includes('089'))

// repeat()
console.log('1111'.repeat(3))

// match() search()
console.log(a.match(/s/g))

// replace()
console.log(a.replace('089','111111'))
console.log(a.replace(/s/g,'hello'))

// slice()
console.log(a.slice(2,7))

// split()
console.log(a.split(' '))
console.log(a.split('s'))

// startsWith()
console.log(a.startsWith('  '))
console.log(a.startsWith('sss'))

// substr() substring()
console.log(a.substr(2,10))
console.log(a.substring(2,10))

// trim()
console.log(a.trim())

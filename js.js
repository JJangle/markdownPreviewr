
function parse(){
    let ed = document.getElementById('editor').value;
    let parEd = marked(ed)
    document.getElementById('preview').innerHTML = parEd;
}

function load(){
    document.getElementById('preview').innerHTML = 
    marked(`
# This is a size 1 header
## This is a size 2 header

***bold text***

[my github](https://github.com/JJangle)
- first list item
-second list item
-third list item
> block quote
\`<div></div>\`

\`\`\`
<p>This is a block of code</p>
\`\`\`

![Hang In There](https://www.rspcasa.org.au/wp-content/uploads/2019/07/kittens-hanging-1-1003x1024.jpg)
`  );
    document.getElementById('editor').defaultValue = `
# This is a size 1 header
## This is a size 2 header

***bold text***

[my github](https://github.com/JJangle)
- first list item
-second list item
-third list item
> block quote
\`<div></div>\`

\`\`\`
<p>This is a block of code</p>
\`\`\`

![Hang In There](https://www.rspcasa.org.au/wp-content/uploads/2019/07/kittens-hanging-1-1003x1024.jpg)
` 
}

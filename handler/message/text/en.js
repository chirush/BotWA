exports.textTnC = () => {
    return `
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname || ''}! 👋️
Here are some of the features of this bot! ✨

Sticker Maker:
1. *!sticker*
To convert an image, gif, or video into a sticker, send the image, gif, or video with the caption !sticker or reply to the image, gif, or video that has been sent with !sticker.

}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Here are some of the group admin features included in this bot!

1. *!tagall*
Mention of all group members.`
}

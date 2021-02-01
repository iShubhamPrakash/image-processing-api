function getImageName(fileName:string, width: string | number, height: string | number, fileExtension='jpg'){
    return `${fileName}_${width}x${height}.${fileExtension}`
}

export default getImageName;
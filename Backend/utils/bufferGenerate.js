import DataUriParser from 'datauri';
import path from 'path';

const bufferGenerate=(file)=>{
    const parser = new DataUriParser()
    const extName=path.extname(file.originalname).tostring()
    return parser.format(extName,file.buffer);
};
export default bufferGenerate;
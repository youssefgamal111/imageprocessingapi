import { findIfFileExist } from "../../../Api/Images/validation";
describe('Testing image availiabilty',()=>{
    it('should return that this photo is (found) which mean that is already risized',async()=>{
        const returnValue=await findIfFileExist(1920,1280,'icelandwaterfall');
        expect(returnValue).toEqual('found');
    });
    it('should return (resize)which meanthat this photo is found but it needs to be risized',async()=>{
        const returnValue=await findIfFileExist(200,200,'fjord');
        expect(returnValue).toEqual('resize');
    });
    it('should return (notfound)which mean that this photo is not found no matter what dimensions required',async()=>{
        const returnValue=await findIfFileExist(200,200,'game');
        expect(returnValue).toEqual('notfound');
    });
});
import { reconstructQueue } from "./solution"

test('Reconstruct Queue solution', () => {
    const testcase1 = JSON.stringify(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))
    
    expect(testcase1).toStrictEqual('[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]')

    const testcase2 = JSON.stringify(reconstructQueue([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]))
    
    expect(testcase2).toStrictEqual('[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]')
})
let rna = []
class converter {
    constructor(filamentoDoRNA) {
        this.filamento = filamentoDoRNA
    }

    conversao(DNA){
        let acidoNucleico = DNA.split("")

        for(let letra of acidoNucleico) {
            if(letra == "C") {
                letra = "G"
                rna.push(letra)

            } else if (letra == "G") {
                letra = "C"
                rna.push(letra)
            
            } else if (letra =="T") {
                letra = "A"
                rna.push(letra)

            }else if (letra =="A") {
                letra = "U"
                rna.push (letra)
            }
        }
        let resultado = rna.join("")
        console.log(resultado)
    }
}

const resultadoFinal = new converter("ATGCCGAAATTTGCG")
console.log ('O resultado dessa conversão é:' .resultadoFinal.conversao(resultadoFinal.filamento))

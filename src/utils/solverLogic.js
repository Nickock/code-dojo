export async function Solver(code,exercise){

    const codeArguments = exercise.arguments.join();
	const codeBody = code.split(`function ${exercise.signature}(${codeArguments})`)[1];
	const solution = new Function(codeArguments,codeBody); 

	// solution;

	let logs = [];
	
	
	exercise.tests.forEach(test=>{
		//crea la expresión a evaluar
		let evalExpresion = `solution(${
			Object.keys(test.arguments).map(key=>JSON.stringify(test.arguments[key])).join(",")
		})`
		// console.log(evalExpresion)
		
		//obtiene el resultado de la evaluación
		let solutionResult = eval(evalExpresion);

		//Compara el resultado esperado contra el obtenido
		let testResult = (JSON.stringify(solutionResult) === JSON.stringify(test.result));


		logs.push({
			input : test.arguments,
			output : solutionResult,
			exceptedOutput : test.result,
			status : testResult
		});
	})	



	return logs;
}
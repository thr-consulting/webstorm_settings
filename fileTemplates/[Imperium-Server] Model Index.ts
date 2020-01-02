import {IImperiumServer} from '@imperium/server';
import {${Model_Name}Context} from './Setting';

export function ${Module_Name}ContextFunction(server: IImperiumServer) {
	return {
		...${Model_Name}Context(server),
	};
}

export {${Model_Name}, ${Model_Name}Context, I${Model_Name}} from './${Model_Name}';
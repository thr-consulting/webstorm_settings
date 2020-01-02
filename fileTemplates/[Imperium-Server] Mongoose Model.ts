#set($nameLower = ${NAME})
#set($nameLower = $nameLower.substring(0).toLowerCase())
#set($module_nameLower = ${Module_Name})
#set($module_nameLower = $module_nameLower.substring(0).toLowerCase())
import debug from 'debug';
import {Schema, model} from 'mongoose';
import {IImperiumServer} from '@imperium/server';
import OrderedDataLoader from '../../lib/OrderedDataLoader';
import {ContextManager} from '../../context';

const d = debug('APP.${module_nameLower}.models.${nameLower}');

const ${nameLower}Schema = new Schema({
	name: {type: String, required: true},
});

const ${NAME}Model = model('${NAME}', ${nameLower}Schema);

export interface I${NAME} {
	_id: string;
	name: string;
}

export class ${NAME} {
	static createDataLoader(server: IImperiumServer) {
		return new OrderedDataLoader<string, I${NAME}>(
			keys => (${NAME}Model.find({_id: {${DS}in: keys}}) as unknown) as Promise<I${NAME}[]>,
			{idField: '_id'}
		);
	}

	static getById(id: string, contextManager: ContextManager) {
		return contextManager.${NAME}Loader.load(id);
	}

	static getAll(contextManager: ContextManager) {
		return (${NAME}Model.find({}) as unknown) as Promise<I${NAME}[]>;
	}
}

export function ${NAME}Context(server: IImperiumServer) {
	return {
		${NAME},
		${NAME}Loader: ${NAME}.createDataLoader(server),
	};
}
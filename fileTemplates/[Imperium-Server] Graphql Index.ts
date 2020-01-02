#set($nameLower = ${Module_Name})
#set($nameLower = $nameLower.substring(0).toLowerCase())
import {ImperiumResolvers} from '@imperium/graphql-server';
import debug from 'debug';
import property from 'lodash/property';
import {ContextManager} from '../../context';
import ${Schema_Filename} from './${Schema_Filename}.graphqls';

const d = debug('APP.${nameLower}.graphql');

export const schema = ${Schema_Filename};

export function resolvers(): ImperiumResolvers {
	return {
		${Model_Name}: {
			id: property('_id'),
		},

		Query: {
			get${Model_Name}(obj: any, {id}: {id: string}, contextManager: ContextManager) {
				return contextManager.${Model_Name}.getById(id, contextManager);
			},
		},

		Mutation: {
			async edit${Model_Name}(
				obj: any,
				{id}: {id: string},
				contextManager: ContextManager,
			) {
				return contextManager.${Model_Name}.edit${Model_Name}({id}, contextManager);
			},
		},
	};
}

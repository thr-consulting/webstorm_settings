import {ImperiumGraphqlServerModule} from '@imperium/graphql-server';
import {IImperiumServer, ImperiumServerModule} from '@imperium/server';
import {schema, resolvers} from './graphql';
import {${Module_Name}ContextFunction as ${Module_Name}Context} from './models';

export {${Module_Name}Context};

export default function ${Module_Name}ServerModule(): ImperiumServerModule & ImperiumGraphqlServerModule {
	return {
		name: '${Module_Name}',
		schema,
		resolvers,
		context: (server: IImperiumServer) => ${Module_Name}Context(server),
	};
}
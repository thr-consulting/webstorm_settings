#set($nameLower = ${Module_Name})
#set($nameLower = $nameLower.substring(0).toLowerCase())
import {IContextManager} from '@imperium/server';
import {${Module_Name}Context} from './${nameLower}';

export type ContextManager = IContextManager<ReturnType<typeof ${Module_Name}Context>>;
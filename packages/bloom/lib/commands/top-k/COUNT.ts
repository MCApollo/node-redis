import { RedisCommandArguments } from '@node-redis/client/dist/lib/commands';
import { pushVerdictArguments } from '@node-redis/client/dist/lib/commands/generic-transformers';

export const FIRST_KEY_INDEX = 1;

export const IS_READ_ONLY = true;

export function transformArguments(
    key: string,
    items: string | Array<string>
): RedisCommandArguments {
    return pushVerdictArguments(['TOPK.COUNT', key], items);
}

export declare function transformReply(): Array<number>;

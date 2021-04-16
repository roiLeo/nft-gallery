import { CommonData,  PostContent } from '@subsocial/types';
import { Post } from '@subsocial/types/substrate/interfaces'

export type PostType = CommonData<Post, PostContent> | undefined

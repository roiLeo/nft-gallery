import { resolveSubsocialApi } from './subsocial';
import BN from 'bn.js';
import { OptionalProfileContent } from './types'
export const SUBSOCIAL_SS58 = 28;

export const findCommentsForPost =  async (postId: string) => {
  const ss = await resolveSubsocialApi();
  const commentIds = await ss.substrate.getReplyIdsByPostId(new BN(postId))
  const commentPromises =  commentIds.map(cm => ss.findPublicPost(cm))
  return await Promise.all(commentPromises);
}

export const findProfile =  async (account: string): Promise<OptionalProfileContent> => {
  const ss = await resolveSubsocialApi();
  const profile = await ss.findProfile(account)
  return profile?.content
}

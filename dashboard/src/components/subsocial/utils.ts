import { resolveSubsocialApi } from './subsocial';
import BN from 'bn.js';

export const findCommentsForPost =  async (postId: string) => {
  const ss = await resolveSubsocialApi();
  const commentIds = await ss.substrate.getReplyIdsByPostId(new BN(postId))
  const commentPromises =  commentIds.map(cm => ss.findPublicPost(cm))
  return await Promise.all(commentPromises);
}

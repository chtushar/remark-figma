import { Node, u } from 'unist-builder';

/**
 * @reference https://www.figma.com/developers/embed
 */
const figmaRegex =
  /https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

const remarkFigma = () => {
  return (tree: Node) => {
    // TODO: Use findAndReplace and create replace function that returns a node
  };
};

export default remarkFigma;

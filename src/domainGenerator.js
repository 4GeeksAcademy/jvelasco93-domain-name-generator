/**
 * Generates all possible domain name combinations.
 *
 * @param {string[]} pronouns - List of pronouns.
 * @param {string[]} adjectives - List of adjectives.
 * @param {string[]} nouns - List of nouns.
 * @param {string[]} extensions - List of domain extensions.
 * @returns {string[]} A list of generated domain names.
 */

export function generateDomains(pronouns, adjectives, nouns, extensions) {
  const domains = [];

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          domains.push(buildDomain(pronoun, adjective, noun, extension));
        }
      }
    }
  }

  return domains;
}

function buildDomain(pronoun, adjective, noun, extension) {
  const baseDomain = `${pronoun}${adjective}${noun}`;
  const cleanExtension = extension.startsWith(".")
    ? extension.slice(1)
    : extension;

  if (baseDomain.endsWith(cleanExtension)) {
    const prefix = baseDomain.slice(0, -cleanExtension.length);
    return `${prefix}${extension}`;
  }

  return `${baseDomain}${extension}`;
}

// Noor's emotional library and voice, in one place (docs/noor/NOOR-IDENTITY.md).
// Each state names its artwork file in src/assets/noor/states/; until that file
// exists, NoorIllustration shows a labelled "artwork in production" frame.

export const NOOR_STATES = {
  hero: {
    name: 'Noor at work',
    file: 'noor-hero',
    aspect: '7 / 5',
    alt: 'Seen from behind at a table under a carved window, a woman with sunglasses pushed into her hair pins venue photographs to a moodboard beside an open sketchbook and a steaming kulhad of chai.',
    brief: 'Over her shoulder: a moodboard, a sketchbook and a kulhad of chai under a jharokha.',
  },
  welcome: {
    name: 'The Welcome',
    file: 'noor-welcome',
    copy: 'So, tell me what you’re dreaming of.',
    alt: 'A woman seen from behind sweeps open an embroidered curtain onto a courtyard lit with diyas and marigold strings, her sunglasses in her other hand.',
    brief: 'An open arm sweeping back a curtain onto a lit courtyard.',
  },
  curious: {
    name: 'The Curious One',
    file: 'noor-curious',
    copy: 'I think I’m beginning to understand your taste.',
    alt: 'Two hands pin a photograph to a moodboard of saved images, fabric swatches and a pressed flower, beside an open sketchbook.',
    brief: 'Hands arranging saved photographs and swatches on a moodboard.',
  },
  dreamer: {
    name: 'The Dreamer',
    file: 'noor-dreamer',
    copy: 'Oh, imagine this coming to life.',
    alt: 'A woman turned away throws a length of fabric into the air, and it unfurls into a mandap of flowers and lanterns.',
    brief: 'Fabric thrown into the air, unfurling into a mandap of flowers.',
  },
  thoughtful: {
    name: 'The Thoughtful One',
    file: 'noor-thoughtful',
    copy: 'These two are lovely, but here’s where they differ.',
    alt: 'Two hands hold two venue sketches side by side, weighing them, with a third card set aside and a kulhad of chai beside them.',
    brief: 'Two hands weighing two venue cards side by side.',
  },
  reassurer: {
    name: 'The Reassurer',
    file: 'noor-reassurer',
    copy: 'Don’t worry. We’ll work through this together.',
    alt: 'Seated on a low diwan, a woman gently stacks a messy pile of cards and swatches into one neat pile, a cup of chai offered across the table.',
    brief: 'A calm hand turning a messy pile into one neat stack.',
  },
  cheerleader: {
    name: 'The Cheerleader',
    file: 'noor-cheerleader',
    copy: 'Now this is coming together beautifully.',
    alt: 'Raised hands mid-clap send marigold petals bursting upward against a turmeric sun, a gold jhumka swinging.',
    brief: 'Raised hands, a burst of marigold petals, a turmeric sun.',
  },
};

/** Noor's lines for small interface moments. Never playful about errors or worries. */
export const NOOR_COPY = {
  welcome: 'Well, this is where the fun begins.',
  listening: 'Tell me what you’ve been saving. I want to get a feel for your style.',
  thinking: 'Give me a moment with this.',
  suggestion: 'I have another idea you might love.',
  reassurance: 'We don’t need to decide everything today.',
  celebration: 'One more beautiful decision made.',
  uncertain: 'I don’t have quite enough detail to recommend something confidently. Can I ask you one thing?',
  noMatch: 'Nothing here is quite right for you yet. Shall we try another city, or a related service?',
  error: 'That didn’t come together as expected. Let’s try once more.',
  cantHelp: 'That’s outside what I can do. Here’s who can help.',
  waiting: 'Take your time. I’m here when you’re ready.',
};

const DEFAULTS = {
  message: `
  SYSTEM MESSAGE: Please summarize the conversation thus far, including important details
  from the existing Summary. Aim for around five paragraphs of content which will help you
  pick up this conversation where you left later on, without forgetting essential details.
  
  Your response will be saved verbatim and used in subsequent rounds of conversation. Please 
  avoid extraneous commentary and omit formatting such of headers. You will be speaking to 
  yourself, so maintain an appropriately-informative tone.
  `,
  turns: 16
};

export default DEFAULTS;

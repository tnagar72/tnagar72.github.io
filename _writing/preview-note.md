---
layout: note
title: "Towards Trustworthy Explainable AI"
date: 2026-05-26
reading_time: "11 min"
topics: [AI Ethics, Philosophy, Explainability, Accountability]
cover: /assets/images/writing/cover-test-1.png
cover_alt: "Dotted halftone illustration of two figures"
has_math: false
published: true
---

In November 2025, a working group at the OECD released what they called a "definitive" framework for explainable AI. It was 84 pages long and used the word *explanation* 612 times. By page 30, it had defined the term in seven incompatible ways. By page 60, it had quietly retreated to defining it by its absence.

This is the state of the field. Not bad. Just stuck. The question I want to take seriously here is whether the stuckness is a passing technical problem &mdash; we just need better methods! &mdash; or whether the concept of "explainable AI" is itself doing something more philosophically suspect, smuggling in commitments it cannot pay for. I think it's the latter, and I want to make the case carefully.[^1]

[^1]: The argument that follows draws heavily on recent work by Lazar and Vredenburgh.

## The standard story

The standard story goes like this. We have models. Models make decisions. Decisions affect people. People deserve to know why. Therefore: explainability. Easy.

The trouble starts at the second sentence. Lazar argues that the move from "this is what the model did" to "this is why the model did it" is not a technical step; it's an ethical one.[^lazar2024] A SHAP value tells you which features the model weighted. It does not tell you whether the weighting was *justified*. And justification, not weighting, is what subjects of automated decisions actually want to know.

[^lazar2024]: Lazar, S. (2024). *The Right to an Explanation.* AI & Society, 39(3), 612–634. [arXiv](https://arxiv.org/abs/2401.xxxx).

```python
import shap

# Tree-based attribution for our XGBoost model
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test, max_display=12)
```

The above code will run. It will produce a plot. The plot will be defensible in a regulatory hearing. None of that means the model's decision was the right one, and none of it means the explanation explains anything to the person being denied a loan.

{% capture cb_note %}
This isn't an argument against SHAP, LIME, or any specific attribution method. The point is that these tools answer a question — "which features mattered most?" — that's narrower than what the demand for an "explanation" actually asks.
{% endcapture %}
{% include callout.html type="note" body=cb_note %}

## The satisfactory explanation problem

> An explanation is satisfactory when the questioner stops asking. This is a sociological fact, not an epistemic one.

Vredenburgh's recent work[^vredenburgh2023] makes a sharper version of this point. When a decision is contested, the question "why?" is not asking for a causal account. It's asking for a justification that survives the questioner's standards of reasonableness.

[^vredenburgh2023]: Vredenburgh, K. (2023). *Contestability and the Procedural Theory of Explanation.* Philosophical Studies, 180, 1234–1256.

This is uncomfortable for the field because it means *there is no model-level explanation that is right for everyone*. Which means the technical project of "produce one explanation per prediction" is, at best, half the work.

{% include figure.html
   src="/assets/images/writing/cover-test-1.png"
   alt="Tiered explainability framework diagram"
   caption="**Figure 1:** Tiered explainability framework. As contestability claims become finer-grained, the required form of explanation becomes more procedural."
%}

## Where the field disagrees

Lazar thinks the answer is to lean harder into procedural legitimacy. Vredenburgh thinks the answer is finer-grained: a taxonomy of *kinds* of explanation, each appropriate to a different contestability context. I find myself drawn to Vredenburgh's view but worried about its scalability.

{% capture cb_question %}
Can a taxonomy-of-explanations be built that's both operationalizable at machine speed AND defensible under philosophical scrutiny? My honest answer: I don't know. But it's where I'd put my research bets.
{% endcapture %}
{% include callout.html type="question" body=cb_question %}

## What I'd propose

If I had to write the research agenda for the next five years of XAI, it would not be technical. It would be:

1. Stop publishing methods papers that do not engage with a specific contestability use-case.
2. Build out the taxonomy of explanation-kinds, in collaboration with legal and STS scholars.
3. Treat institutional and technical research as co-equal &mdash; the latter is an input to the former, not a deliverable.
4. Be honest that some questions are not technical questions and never will be.

That last point is the hardest to swallow. The field has spent a decade selling itself as the discipline that would make models *trustworthy*. The honest answer is that trust is not a model property; it is a relational achievement between an institution and its subjects.[^2] We can help. We cannot deliver.

[^2]: See also [Mireshghallah et al. (2024)](https://arxiv.org/abs/2310.17884) on a parallel point about privacy.

That's a less impressive pitch. It's also a more honest one.

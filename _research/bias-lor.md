---
paper_id: bias-lor
published: true
---

## Abstract

The shift to pass/fail grading by medical schools and the USMLE Step 1 exam has reduced the available application evaluation measures, increasing the reliance on subjective Letters of Recommendation (LoRs). While all measures are susceptible to bias, LoRs may be especially prone to implicit bias. Fortunately, advances in Natural Language Processing allow systematic investigation into such potential biases. This study investigates implicit biases in LoRs in plastic surgery residency applications using linguistic analysis and statistical methods, exploring the potential of any detected differences to impact the evaluation of applicants.

## Methods

The dataset comprised 5,679 plastic surgery residency applications submitted via the ERAS system to a midwestern academic medical center over a six-year period, 2017–2022. Python scripts anonymized LoRs using Part-of-Speech tagging, Named Entity Recognition, and applicant-specific data to ensure the removal of identifiers. The research team iterated on a 400-word dictionary containing descriptive attributes of applicants, such as academic performance, personality traits, and professional skills. These words were organized into 24 categories by team consensus. The Linguistic Inquiry and Word Count (LIWC) software was used to quantify word frequency, count, and specific linguistic patterns based on this dictionary. These categories were then compared based on applicant-identified gender and race or ethnicity using a two-way MANOVA.

## Results

There was a statistically significant interaction between gender and race/ethnicity on combined dependent variables, F(96, 22596) = 1.453, p = .003, Pillai's Trace = .025. Given the significant multivariate interaction, significance tests for individual dependent variables were examined. There were significant univariate interactions for different categories. Men of multiple races were more likely to have Activity comments, F(4, 5669) = 2.819, p < .001, or were more likely described as Inventive or Curious, F(4, 5669) = .495, p = .034. Women of multiple races were more often described as Sensitive or Nervous, F(4, 5669) = .005, p < .001, with descriptors such as Solitary or Reserved, F(4, 5669) = .092, p = .008, used more often for Asian and Black or African American women applicants. There was a significant main effect of gender for Gendered Terms, F(1, 5669) = .038, p < .001, with gendered language more often used for men, and for Technical Skill, F(1, 5669) = .007, p = .002, with comments more often on technical skills of women. There were no significant main effects for race/ethnicity.

## Conclusion

Significant differences were detected based on combinations of gender and race or ethnicity as well as on gender alone, so it is essential to consider the intersectionality of identities when examining for bias. Potential differences in language are important to further examine and consider, as they may impact evaluations of applicants' qualifications for plastic surgery residency programs.
